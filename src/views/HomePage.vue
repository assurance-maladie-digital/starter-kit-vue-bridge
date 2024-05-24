<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
		:navigation-items="navigationItems"
	/>
	<PageContainer>
		<div>
			<div class="bg-grey-lighten-1">
				<h2>DataList</h2>
				<DataList :items="dataListItems"></DataList>
			</div>
			<div class="ml-4">
				<h2>DataListGroup</h2>
				<DataListGroup :items="dataListGroupItems"></DataListGroup>
			</div>
			<div class="bg-grey-lighten-1">
				<h2>FooterWrapper</h2>
				<FooterWrapper>
					<VBtn variant="tonal" class="mr-6">
						Mentions légales
					</VBtn>

					<VBtn variant="tonal" class="mr-6">
						CGU
					</VBtn>

					<VBtn variant="tonal" inert>
						Version 1.0.0
					</VBtn>
				</FooterWrapper>
			</div>
			<div class="ml-4">
				<h2>SubHeader</h2>
				<SubHeader
					back-btn-text="Back"
					title-text="Paul Dupont"
					sub-title-text="1 69 08 75 125 456 75"/>
			</div>

			<div class="bg-grey-lighten-1 mt-4">

			</div>
			<div class="mt-4">
				<h2>Logo</h2>
				<Logo/>
			</div>
			<div class="bg-grey-lighten-1 mt-4 my-4">
				<h2>HeaderLoading</h2>
				<HeaderLoading width="300px" height="30px"/>
			</div>
			<div class="bg-grey-lighten-1">
				<h2>CookieBanner</h2>
				<div class="d-flex flex-wrap align-center justify-center">
					<CookieBanner
						v-if="active"
						cookies-route=""
						@reject="active = false"
						@accept="active = false"
					/>

					<VBtn
						v-if="!active"
						color="primary"
						@click="active = true"
					>
						Réinitialiser
					</VBtn>
				</div>
			</div>
			<div class="mt-4 my-4">
				<h2>Logo Brand Section</h2>
				<LogoBrandSection
					service-sub-title="Documentation du Design System"
					service-title="Design System"
				/>
			</div>
			<div class="mt-4 my-4 bg-grey-lighten-1">
				<h2>ChipList</h2>
				<ChipList :items="chipItems"/>
			</div>
			<div class="mt-4 my-4">
				<h2>PasswordField</h2>
				<PasswordField
					v-model="password"
					@update:model-value="getValue($event)"
				/>
			</div>
		</div>
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<p class="text-secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { mapActions, mapGetters } from "vuex";
import { required } from "@cnamts/synapse-bridge/rules/required";
import { notAfterToday } from "@cnamts/synapse-bridge/rules/notAfterToday";
import { notBeforeToday } from "@cnamts/synapse-bridge/rules/notBeforeToday";
import dayjs from "dayjs";
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
			validRules: [required],
			warningRules: [notAfterToday, notBeforeToday],
			hint: 'Date de hint',
			active: true,
			dialog: false,
			chipItems: [
				{text: 'Item 1', value: 'item1'},
				{text: 'Item 2', value: 'item2'},
				{text: 'Item 3', value: 'item3'},
			],
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
				},
				{
					label: 'Period Field',
					to: '/period-field'
				},
				{
					label: 'DatePicker',
					to: '/date-picker'
				}
			],
			dataListItems: [
				{
					key: 'Nom',
					value: 'Dupont',
				},
				{
					key: 'Prénom',
					value: 'Paul',
				},
				{
					key: 'Date de naissance',
					value: '24/09/1970',
				},
			],
			dataListGroupItems: [
				{
					title: 'Informations patient',
					items: [
						{
							key: 'Nom',
							value: 'Dupont',
							icon: 'accountIcon',
							chip: true
						},
						{
							key: 'Prénom',
							value: 'Paul',
							icon: 'accountIcon'
						},
						{
							key: 'Date de naissance',
							value: '24/09/1970',
							icon: 'calendarIcon',
							action: 'Modifier'
						}
					]
				},
				{
					title: 'Médecin traitant',
					items: [
						{
							key: 'Nom du praticien',
							value: 'Gérard Leblanc',
							icon: 'doctorIcon'
						},

						{
							key: 'N° RPPS',
							value: 'XXXXX',
							icon: 'cardAccountIcon'
						}
					]
				},
				{
					title: 'Autres informations',
					items: [
						{
							key: 'Dernière modification',
							value: '04/06/2020',
							icon: 'editIcon'
						}
					]
				}
			],
			password: null as string | null,
			periodFieldDate: ['01/05/2024', '13/05/2024'],
			datePickerdate: null,
			date:[dayjs().format('DD/MM/YYYY'), dayjs().add(12, 'day').format('DD/MM/YYYY')],
			date2: [dayjs().format('DD/MM/YYYY'), dayjs().add(3, 'day').format('DD/MM/YYYY')],
			date3: [dayjs().format('DD/MM/YYYY'), dayjs().add(5, 'day').format('DD/MM/YYYY')],
			changingDate: [dayjs().format('YYYY/MM/DD'), dayjs().add(5, 'day').format('YYYY/MM/DD')]
		}
	},
	computed: {
		...mapGetters('notification', {
			notification: 'notification',
		}),
	},
	methods: {
		...mapActions('notification', {
			dispatchNotification: 'addNotification',
			dispatchClearNotification: 'clearNotification',
		}),
		createNotification(): void {
			this.dispatchNotification({
				type: 'info',
				message: 'Exemple de notification.',
			})
		},
		removeNotification(): void {
			this.dispatchClearNotification();
		},
		getValue(value: string): void {
			console.log(value);
		}
	}
});
</script>
