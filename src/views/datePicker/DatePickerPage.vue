<template>
	<HeaderBar
		:navigation-items="navigationItems"
		service-sub-title="Documentation du Design System"
		service-title="Design System"
	/>
	<PageContainer>
		<BackBtn to="/"/>
		<div class="d-flex justify-sm-space-around">
			<div>
				<DatePicker
					v-model="datePickerdate"
					range
				/>
				<date-picker v-model="date" :rules="validRules" label="Date"/>
				<h3>Warning Rules</h3>
				<date-picker v-model="date" :warning-rules="warningRules" hint="defaultHint" label="Date" outlined/>

				<h3>No Calendar</h3>
				<date-picker v-model="date" :hint="defaultHint" label="Date" no-calendar/>

				<h3>TextField Activator</h3>
				<date-picker v-model="date" :hint="defaultHint" label="Date" text-field-activator/>

				<h3 class="mt-4">Show weekends</h3>
				<date-picker v-model="date" :hint="defaultHint" label="Date" show-weekends/>

				<h3 class="mt-4">Disabled</h3>
				<date-picker v-model="date" :hint="defaultHint" disabled label="Date"/>
			</div>
			<div>
			<h3 class="mt-4">Outlined</h3>
			<date-picker v-model="date" :hint="defaultHint" label="Date" outlined/>

			<h3 class="mt-4">Birthdate</h3>
			<date-picker v-model="date" :hint="defaultHint" birthdate label="Date d'anniversaire"/>

			<h3 class="mt-4">Range</h3>
			<div>
				{{ dateRange }}
				<date-picker
					v-model="dateRange"
					clearable
					outlined
					range
				/>
			</div>

			<h3 class="mt-4">DateFormat</h3>
			{{ dateToFormat }}
			<date-picker v-model="dateToFormat" dateFormat="DD-MM-YYYY" hint="JJ-MM-YYYY" label="Date"/>
			<h3 class="mt-4">DateFormatReturn</h3>
			{{ dateFormatReturn }}
			<date-picker v-model="dateFormatReturn" :hint="defaultHint" dateFormatReturn="DD/MM/YY" label="Date"/>
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
import {mapActions, mapGetters} from "vuex";
import {required} from "@cnamts/synapse-bridge/rules/required";
import {notAfterToday} from "@cnamts/synapse-bridge/rules/notAfterToday";
import {notBeforeToday} from "@cnamts/synapse-bridge/rules/notBeforeToday";
import dayjs from "dayjs";
import {
	BackBtn,
	BackToTopBtn,
	ChipList,
	CookieBanner,
	CookiesPage,
	CopyBtn,
	DataList,
	DataListGroup,
	DatePicker,
	DialogBox,
	ErrorPage,
	FooterBar,
	FooterWrapper,
	FranceConnectBtn,
	HeaderBar,
	HeaderLoading,
	Logo,
	LogoBrandSection,
	MaintenancePage,
	NotFoundPage,
	NotificationBar,
	PageContainer,
	PasswordField,
	PeriodField,
	SubHeader,
	UserMenuBtn
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
					label: 'User Menu Btn',
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
			datePickerdate: null,
			date: [dayjs().format('DD/MM/YYYY'), dayjs().add(12, 'day').format('DD/MM/YYYY')],
			date2: [dayjs().format('DD/MM/YYYY'), dayjs().add(3, 'day').format('DD/MM/YYYY')],
			date3: [dayjs().format('DD/MM/YYYY'), dayjs().add(5, 'day').format('DD/MM/YYYY')],
			date1: dayjs().add(2, 'day').format('DD/MM/YYYY'),
			dateRange:[dayjs().format('DD/MM/YYYY'), dayjs().add(12, 'day').format('DD/MM/YYYY')],
			startDate: null,
			endDate: null,
			dateDefinie: dayjs().format('DD/MM/YYYY'),
			dateToFormat: dayjs().format('DD/MM/YYYY'),
			dateFormatReturn: dayjs().format('DD/MM/YYYY'),
			notAfterTodayRules: [notAfterToday],
			notBeforeTodayRules: [notBeforeToday],
			defaultHint: "Format JJ/MM/YYYY",
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
