<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
		:navigation-items="navigationItems"
	/>
	<PageContainer>
		<BackBtn to="/"/>
		<MaintenancePage />
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<p class="text--secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PageContainer,
	HeaderBar,
	FooterBar,
	DataList,
	DataListGroup,
	UserMenuBtn,
	DialogBox,
	FooterWrapper,
	SubHeader,
	BackBtn,
	FranceConnectBtn,
	CopyBtn,
	Logo,
	HeaderLoading,
	BackToTopBtn,
	CookieBanner,
	CookiesPage,
	LogoBrandSection,
	ChipList,
	NotificationBar,
	ErrorPage,
	MaintenancePage,
	NotFoundPage,
	PasswordField,
	DatePicker,
	PeriodField
} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		PageContainer,
		HeaderBar,
		FooterBar,
		UserMenuBtn,
		DialogBox,
		DataList,
		DataListGroup,
		FooterWrapper,
		SubHeader,
		BackBtn,
		FranceConnectBtn,
		CopyBtn,
		Logo,
		HeaderLoading,
		BackToTopBtn,
		CookieBanner,
		CookiesPage,
		LogoBrandSection,
		ChipList,
		NotificationBar,
		ErrorPage,
		MaintenancePage,
		NotFoundPage,
		PasswordField,
		DatePicker,
		PeriodField
	},
	data() {
		return {
			navigationItems: [
				{
					label: 'Home',
					to: '/'
				},
				{
					label: 'TestInva',
					to: '/test-inva'
				},
				{
					label: 'Header',
					to: '/header'
				},
				{
					label: 'Maintenance',
					to: '/maintenance'
				},
				{
					label: 'Error Page',
					to: '/error'
				},
				{
					label: 'Not Found Page',
					to: '/not-found'
				},
				{
					label: 'Btns',
					to: '/user-menu-btn'
				},
				{
					label: 'Dial Box',
					to: '/dialog-box'
				},
				{
					label: 'Nirfield',
					to: '/nirfield'
				},
				{
					label: 'NotifBar',
					to: '/notification-bar'
				}
			],
		}
	},
	computed: {
	},
	methods: {
	}
});
</script>
