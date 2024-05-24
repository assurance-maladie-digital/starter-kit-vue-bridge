<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
		:navigation-items="navigationItems"
	/>
	<PageContainer>
		<div>
			<VBtn
				color="primary"
				@click="dialog = true"
			>
				Afficher le composant
			</VBtn>

			<DialogBox
				v-model="dialog"
				:width="dialogWidth"
				title="Enregistrement"
				@cancel="dialog = false"
				@confirm="dialog = false"
			>
				<p>Souhaitez-vous procéder à l’enregistrement ?</p>
			</DialogBox>

			<br /><br />

			<VBtn
				color="primary"
				@click="dialog2 = true"
			>
				Afficher le composant
			</VBtn>

			<DialogBox
				v-model="dialog2"
				:width="dialogWidth2"
				title="Enregistrement"
				cancel-btn-text="Retour"
				confirm-btn-text="Enregistrer"
				@cancel="dialog2 = false"
				@confirm="dialog2 = false"
			>
				<p>Souhaitez-vous procéder à l’enregistrement ?</p>
			</DialogBox>

			<br /><br />

			<VBtn
				color="primary"
				@click="dialog3 = true"
			>
				Afficher le composant
			</VBtn>

			<DialogBox
				v-model="dialog3"
				title="Enregistrement"
				hide-actions
			>
				<p class="mb-1">
					Souhaitez-vous procéder à l’enregistrement ?
				</p>
			</DialogBox>
		</div>
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
import { tokens } from '@cnamts/design-tokens';
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
			dialog: false,
			dialogWidth: tokens.dialogWidth.dialogSmall,
			dialog2: false,
			dialogWidth2: tokens.dialogWidth.dialogMedium,
			dialog3: false,
			navigationItems: [
				{
					label: 'Home',
					to: '/'
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
					label: 'User Menu Btn',
					to: '/user-menu-btn'
				},
				{
					label: 'Dial Box',
					to: '/dialog-box'
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
