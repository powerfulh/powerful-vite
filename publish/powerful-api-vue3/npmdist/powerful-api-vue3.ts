import { inject, Ref, unref } from 'vue'
import axios, { AxiosRequestConfig } from 'axios'
import store from './store'
import operation from '@/api/operation'
import { ApiOperation } from './apis'

type Oid = keyof typeof operation
type SuccessCallback<T extends Oid> = (typeof operation)[T]['res']

interface ApiOption {
	loading?: boolean
}

let l: ApiOperation<any>
const p = {}
let sc: Function
let fc: Function
const launcher = {
	load: <A extends Oid>(oid: A) => {
		if (operation[oid]) {
			l = operation[oid]
			return {
				setParameter: setParameter<SuccessCallback<A>>,
				setWhenSuccess: setWhenSuccess<SuccessCallback<A>>,
				setWhenFinally,
				fire,
			}
		} else globalMode.warn(`API ${oid} does not exists`)
	},
}

function callAxios(c: AxiosRequestConfig, o: ApiOption) {
	const call = axios(c)
	const apiStore = store()
	if (o.loading) apiStore.loadingStack++
	const loadedCallback = sc
	if (loadedCallback) call.then(res => loadedCallback(res.data))
	// catch todo
	const loadedFinallyCallback = fc
	call.finally(() => {
		if (o.loading && apiStore.loadingStack > 0) apiStore.loadingStack--
		if (loadedFinallyCallback) loadedFinallyCallback()
	})
	l = null
	Object.keys(p).forEach(item => delete p[item])
	sc = null
	fc = null
}
function fire(option: ApiOption = { loading: true }) {
	if (option.loading === undefined) option.loading = true // 명시적으로 주지 않으면 기본적으로 로딩 표현
	const g = ['get', 'GET'].includes(l.type)
	const pathParam = l.param?.filter(item => item.path) || []
	const finalUrl = pathParam.length ? pathParam.reduce((r, item) => r.replace(`{${item.name}}`, p[item.name]), l.url) : l.url
	const c: AxiosRequestConfig = {
		method: l.type,
		url: finalUrl,
		[g ? 'params' : 'data']: l.param
			? l.param
					.filter(item => item.path != true)
					.reduce(
						(r, item) =>
							Object.assign(
								r,
								Object.prototype.hasOwnProperty.call(p, item.name)
									? {
											[item.name]: p[item.name],
										}
									: {},
							),
						{},
					)
			: {},
	}
	if (g) callAxios(c, option)
	// else todo
}
function setParameter<T>(param: Ref<{}>) {
	const urp = unref(param)
	Object.assign(
		p,
		Object.keys(urp).reduce((r, item) => {
			// 내부 속성이 또 ref 인 경우가 있다면 속성마다 unref 를 해줘야 한다
			return Object.assign(r, { [item]: urp[item] })
		}, {}),
	)
	return {
		setWhenSuccess: setWhenSuccess<T>,
		setWhenFinally,
		fire,
	}
}
function setWhenSuccess<R>(c: (res: R) => any) {
	sc = c
	return {
		setWhenFinally,
		fire,
	}
}
function setWhenFinally(c: () => void) {
	fc = c
	return {
		fire,
	}
}

export default {
	getLauncher: () => launcher,
}

export function injectApi() {
	return inject('api') as typeof launcher
}
export function getApiStore() {
	return store()
}
