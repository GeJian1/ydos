import 'element-plus/lib/theme-chalk/base.css'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElMessage,
  ElMenu,
  ElMenuItem,
  ElSubmenu
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElMessage,
  ElMenu,
  ElMenuItem,
  ElSubmenu
]

function registerElement(app) {
  for (const component of components) {
    app.component(component.name, component)
  }
}

export function globalRegister(app) {
  app.use(registerElement)
}
