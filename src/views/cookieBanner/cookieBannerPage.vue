<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
		:navigation-items="navigationItems"
	/>
	<PageContainer>
		<BackBtn to="/"/>
		<CookieBanner
			v-if="active1"
			cookies-route="/templates/cookies-page"
			@reject="active1 = false"
			@accept="active1 = false"
		/>

		<CookieBanner
			v-if="active2"
			:vuetify-options="vuetifyOptions"
			cookies-route="/templates/cookies-page"
			@reject="active2 = false"
			@accept="active2 = false"
		/>

		<CookieBanner
			v-if="active3"
			cookies-route="/templates/cookies-page"
			@reject="active3 = false"
			@accept="active3 = false"
		>
			Ce téléservice utilise des cookies en enregistrant certaines informations lors de votre navigation.
		</CookieBanner>

		<VBtn
			v-if="!active1"
			color="primary"
			@click="active1 = true"
		>
			Réinitialiser 1
		</VBtn>
		<VBtn
			v-if="!active3"
			color="primary"
			@click="active2 = !active2"
		>
			Réinitialiser 2
		</VBtn>
		<VBtn
			v-if="!active3"
			color="primary"
			@click="active3 = !active2"
		>
			Réinitialiser 3
		</VBtn>
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
			vuetifyOptions: {
				sheet: {
					elevation: 5
				},
				customizeBtn: {
					variant: 'text',
					outlined: false
				},
				rejectBtn: {
					outlined: true
				},
				acceptBtn: {
					outlined: true
				}
			},
			active1:true,
			active2: false,
			active3: false
		}
	},
	computed: {
	},
	methods: {
	}
});
</script>

<style>
</style>
