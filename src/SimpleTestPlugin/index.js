import SimpleDemoComponent from "./SimpleDemoComponent.vue";
import "./assets/style.css";

export function SimpleTestPlugin(app) {
	app.component("SimpleDemoComponent", SimpleDemoComponent);
}