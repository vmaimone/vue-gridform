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
      const { formField } = this.$els
        this.$el.classList.add('focus')
        formField.classList.add('focus')
        formField.focus()

      if (this.type !== 'select') {
        formField.select()
      } else {
      }
    },
    removeFocus() {
      this.$els.formField.classList.remove('focus')
      this.$el.classList.remove('focus')
    }
  },
  template: `
    <div @click.stop="setFocus" class="grid-form-field-container" data-field-span={{cols}}>
      <label class="grid-form-field-label" v-text="label"></label>
      <div v-if="type === 'select'">
        <select v-el:form-field
          v-model="value"
          @focus="setFocus"
          @blur="removeFocus">
          <option v-for="opt in options" :value="opt" v-text="opt"></option>
        </select>
      </div>
      <div v-else>
        <input v-el:form-field
          v-model="value"
          @blur="removeFocus"
          @focus="setFocus"
          type="{{type || 'text'}}"
        />
      </div>
    </div>`
}

export const fieldRow = {
  components: { fieldContainer },
  props: {
    cols: Number,
    fields: Array
  },
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
  components: { fieldRow },
  props: {
    legend: String,
    rows: Array
  },
  computed: {
    fieldRows() {
      return this.$refs.fieldRows
    },
    lecontainers() {
      return this.fieldRows.map(r => r.$refs.fieldContainer)
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
