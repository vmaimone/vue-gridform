# vue-gridform

> A Vue.js implementation of [gridforms.js](http://kumailht.com/gridforms)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
For a detailed explanation on how the build works, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Form Schemas

``` javascript
const myForm = {
  section: {
    legend: 'Section Title',
    rows: [
      /* two fields at 50% width */
      {
        span: 2,
        fields: [
          {label: 'test', key: 'test', type: 'text', span: 1},
          {label: 'test number', key: 'testNum', type: 'number', span: 1}
        ]
      }
    ]
}

```
For more information about how form layout works, consult the [docs for gridforms](https://github.com/kumailht/gridforms#2-markup-your-gridform).


## Example Usage
``` html
  <div id="my-gridform">
    <vue-gridform header="<h1>Example</h1>" :sections="gridSections" @submit.prevent="doSomething">
      <div class="my-grid-footer">
        <!-- custom slot for form footer / submit button -->
      </div>
    </vue-gridform>
  </div>

```

``` javascript
new Vue({
  el: '#my-gridform',
  components: {
    vueGridform: VueGridform
  },
  data() {
    return {
      gridSections: {
        section1: { legend, rows },
        section2: { ... }
      }
    }
  }
})

```