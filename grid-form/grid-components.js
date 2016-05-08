
export const fieldContainer = {
  props: {
    value: null,
    type: String,
    label: String,
    key: String,
    cols: Number,
    options: Array
  },
  methods: {
    setFocus() {
      const { formField } =  this.$els
      if(this.type!=='select') {
        formField.classList.add('focus')
        formField.focus()
        formField.select()
      } else {

      }
    },
    removeFocus() {
      this.$els.formField.classList.remove('focus')
    }
  },
  template: `
    <div @click="setFocus" class="grid-form-field-container" data-field-span={{cols}}>
      <label class="grid-form-field-label" v-text="label"></label>
      <div v-if="type === 'select'">
        <select v-el:form-field
          v-model="value"
          @blur="removeFocus">
          <option v-for="opt in options" :value="opt" v-text="opt"></option>
        </select>
      </div>
      <div v-else>
        <input v-el:form-field
          v-model="value"
          @blur="removeFocus"
          type="{{type || 'text'}}"
        />
      </div>
    </div>`
}

export const fieldRow = {
  props: { cols: Number, fields: Array },
  components: { fieldContainer },
  computed: {
    fieldContainers() {
      return this.$refs.fieldContainer
    }
  },
  template: `
    <div class="grid-form-field-row" data-row-span={{cols}}>
      <field-container
        v-ref:field-container
        v-for="field in fields"
        :label="field.label"
        :cols="field.span"
        :key="field.key"
        :type="field.type"
        :options="field.options || null"
        :value="field.value">
      </field-container>
    </div>`
}

export const fieldSet = {
  props: { legend: String, rows: Array },
  components: { fieldRow },
  computed: {
    fieldRows() {
      return this.$refs.fieldRows
    }
  },
  template: `
    <fieldset class="grid-form-fieldset">
      <legend v-text="legend"></legend>
      <field-row
        v-for="row in rows"
        v-ref:field-rows
        :fields="row.fields"
        :cols="row.span">
      </field-row>
    </fieldset>

  `
}
