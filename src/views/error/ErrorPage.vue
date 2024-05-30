<template>
	<AppHeader/>
	<PageContainer>
		<BackBtn to="/"/>
		<ErrorPage
			code="500"
			message="La page ne fonctionne pas correctement."
			page-title="Erreur serveur"
			btn-route="/"
		/>

		<ErrorPage
			page-title="Page non trouvée"
			message="Il semblerait qu’il y ait eu une erreur !"
			code="404"
			no-btn
		/>

		<ErrorPage
			code="404"
			page-title="Page non trouvée"
			message="Cette page n’existe pas ou a été déplacée."
			btn-route="/"
		/>
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
import { defineComponent } from "vue";
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
import AppHeader from "@/views/commons/AppHeader.vue";

export default defineComponent({
	components: {
		AppHeader,
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
		}
	},
	computed: {
	},
	methods: {
	}
});
</script>
