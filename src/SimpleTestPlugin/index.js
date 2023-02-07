import SimpleDemoComponent from "./SimpleDemoComponent.vue";

export function SimpleTestPlugin(app) {
	app.component("SimpleDemoComponent", SimpleDemoComponent);
}