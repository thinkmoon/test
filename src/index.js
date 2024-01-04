const CompA = () => import('./components/CompA.vue')
const CompB = () => import('./components/CompB.vue')
export { CompA, CompB}

window.CompA = CompA
window.CompB = CompB