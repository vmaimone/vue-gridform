<template>
  <form class="grid-form">
    <div v-if="header" class="grid-form-header" v-html="header"></div>
    <field-set
      v-ref:field-sets
      v-for="(section,fieldset) in sections"
      :rows="fieldset.rows"
      :legend="fieldset.legend"
      style="padding-bottom:.25rem;">
    </field-set><br>
    <slot></slot>
  </form>
</template>
<style src="./grid-form.css"></style>
<script src="./main.js"></script>
