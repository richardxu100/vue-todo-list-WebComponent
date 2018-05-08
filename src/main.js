import Vue from 'vue'

// include vue-custom-element plugin to Vue
import VueCustomElement from 'vue-custom-element'
Vue.use(VueCustomElement)

// import and register your component(s)
// import ShareButtonsComponent from './components/ShareButtonsComponent'
import TodoList from './components/TodoList'

// Vue.customElement('share-buttons', ShareButtonsComponent)
Vue.customElement('todo-list', TodoList)
