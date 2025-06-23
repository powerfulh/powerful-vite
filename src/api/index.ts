import { inject, Ref, unref } from 'vue'
import apis, { Loaded } from './apis'
import axios, { AxiosRequestConfig } from 'axios'
import store from './store'

type Oid = keyof typeof apis.apis

interface ApiOption {
	loading?: boolean
}

let l: Loaded
const p = {}
let sc
const launcher = {
	load: <A extends Oid>(oid: A) => {
		if (apis.apis[oid]) {
			l = apis.apis[oid]
			return {
				fire,
				setParameter,
				setWhenSuccess,
			}
		} else globalMode.warn(`API ${oid} does not exists`)
	},
}

function callAxios(c: AxiosRequestConfig, o: ApiOption) {
	const call = axios(c)
	if (o.loading) {
		const apiStore = store()
		apiStore.loadingStack++
	}
	const loadedCallback = sc
	if (loadedCallback) call.then(res => loadedCallback(res.data))
	// catch todo
	// finally todo
	l = null
	Object.keys(p).forEach(item => delete p[item])
	sc = null
}
function fire(option: ApiOption = { loading: true }) {
	if (option.loading === undefined) option.loading = true // 명시적으로 주지 않으면 기본적으로 로딩 표현
	const g = ['get', 'GET'].includes(l.type)
	const c: AxiosRequestConfig = {
		method: l.type,
		url: l.url,
		[g ? 'params' : 'data']: l.param
			? l.param.reduce((r, item) =>
					Object.assign(
						r,
						Object.prototype.hasOwnProperty.call(p, item.name)
							? {
									[item.name]: p[item.name],
								}
							: {},
					),
				)
			: {},
	}
	if (g) callAxios(c, option)
	// else todo
}
function setParameter<T>(p: Ref<T>) {
	const urp = unref(p)
	Object.assign(
		p,
		Object.keys(urp).reduce((r, item) => {
			// 내부 속성이 또 ref 인 경우가 있다면 속성마다 unref 를 해줘야 한다
			return Object.assign(r, { [item]: p[item] })
		}, {}),
	)
	return {
		fire,
		setWhenSuccess,
	}
}
function setWhenSuccess(c) {
	sc = c
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
