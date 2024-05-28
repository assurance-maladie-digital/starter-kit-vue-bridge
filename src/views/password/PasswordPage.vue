<template>
	<AppHeader/>
	<PageContainer>
		<BackBtn to="/"/>
		<div class="w-50 mx-auto">
			<v-col>
				Mot de passe: {{ password }}
				<PasswordField
					v-model="password"
					@update:model-value="getValue($event)"
				/>
			</v-col>
			<v-col>
				Mot de passe: {{ password2 }}
				<PasswordField
					v-model="password2"
					class="mt-2"
					required
					outlined
					@update:model-value="getValue($event)"
				/>
			</v-col>
			<v-col>
				Mot de passe: {{ password3 }}
				<PasswordField
					v-model="password3"
					class="mt-2"
					required
					outlined
					@update:model-value="getValue($event)"
				/>
			</v-col>
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
			password: null,
			password2: null,
			password3: 'jesuis1superm0tdepasse',
		}
	},
	computed: {
	},
	methods: {
		getValue(value: string): void {
			console.log(value);
		}
	}
});
</script>
