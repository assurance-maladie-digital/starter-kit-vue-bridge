<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
		:navigation-items="navigationItems"
	/>
	<PageContainer class="h-35">
		<BackBtn to="/"/>
		<h2>User Menu Btn</h2>
		<div class="d-flex justify-sm-space-between">
			<UserMenuBtn
				additional-information="Information supplémentaire"
				full-name="Virginie Beauchesne"
			/>
			<UserMenuBtn full-name="Édith Cartier">
				<VListItem
					v-for="(item, index) in items"
					:key="index"
				>
					<VListItemTitle>{{ item }}</VListItemTitle>
				</VListItem>
			</UserMenuBtn>
			<br/><br/>
			<UserMenuBtn
				additional-information="Information supplémentaire"
				full-name="Virginie Beauchesne"
				mobile-version
			/>
			<br/><br/>
			<UserMenuBtn
				:vuetify-options="vuetifyOptionsUserMenuBtn"
				full-name="Édith Cartier"
			>
				<VListItem
					v-for="(item, index) in items"
					:key="index"
				>
					<VListItemTitle>{{ item }}</VListItemTitle>
				</VListItem>
			</UserMenuBtn>
		</div>
		<h2>France connect Btn</h2>
		<div class="d-flex justify-sm-space-between">
			<FranceConnectBtn href="https://app.franceconnect.gouv.fr/" />
			<br />
			<FranceConnectBtn
				connect-plus
				href="https://app.franceconnect.gouv.fr/"
			/>
		</div>
		<h2>CopyBtn</h2>
		<div class="d-flex justify-sm-space-between">
		<CopyBtn
			label="Copier le numéro de dossier"
			text-to-copy="example-2"
		/>
			<CopyBtn
				label="Copier le numéro de dossier"
				:text-to-copy="() => 'example-1'"
			/>

			<CopyBtn
				label="Copier le numéro de dossier"
				text-to-copy="example-2"
			/>

			<CopyBtn
				label="Copier le numéro de patient"
				text-to-copy="example-3"
				hide-tooltip
			/>

			<CopyBtn
				:tooltip-duration="5000"
				label="Copier le numéro de patient"
				text-to-copy="example-4"
			/>

			<CopyBtn
				label="Copier le numéro de ticket"
				text-to-copy="example-6"
			>
				<template #icon>
					<VIcon>
						{{ mdiContentDuplicate }}
					</VIcon>
				</template>

				<template #tooltip>
					Le texte a bien été copié
				</template>
			</CopyBtn>

			<CopyBtn
				:vuetify-options="vuetifyOptions"
				label="Copier le numéro d'utilisateur"
				text-to-copy="example-5"
			/>
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
			items: [
				'Administration',
				'Profil',
				'Paramètres'
			],
			vuetifyOptions: {
				menu: {
					location: 'bottom center',
					offset: 2
				},
				btn: {
					density: 'default'
				},
				icon: {
					color: 'indigo'
				}
			},
			vuetifyOptionsUserMenuBtn: {
				menu: {
					minWidth: '264px',
					maxWidth: '264px'
				},
				btn: {
					variant: 'outlined',
				},
				icon: {
					color: 'primary'
				},
				logoutIcon: {
					class: 'd-none'
				}
			},
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
