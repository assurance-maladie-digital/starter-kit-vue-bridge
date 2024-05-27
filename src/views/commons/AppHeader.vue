<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
		:navigation-items="navigationItems"
	/>
</template>
<script setup lang="ts">
import { HeaderBar } from "@cnamts/synapse-bridge";
 const navigationItems = [
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
	 },
	 {
		 label:'DataList',
		 to:'/data-list'
	 },
	 {
		 label:'Cookie Banner',
		 to:'/cookie-banner'
	 }
 ]

</script>
