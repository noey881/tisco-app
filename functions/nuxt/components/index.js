export { default as AlertInformation } from '../../components/AlertInformation.vue'

export const LazyAlertInformation = import('../../components/AlertInformation.vue' /* webpackChunkName: "components/alert-information" */).then(c => c.default || c)
