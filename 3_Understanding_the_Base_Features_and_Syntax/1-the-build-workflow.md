# Using the Build Workflow

## Why

* **Optimize Code** - for a big react application we want to ship code that is as small as possible and as optimized as possible, because it increases the performance of our app.
* **Use Next-Gen JavaScriptFeatures** - because it makes out lives as developers much easier and it is also the de-facto standard for Reach applications to use these featues, because the code is *leaner*, *much easier to read*, *faster*, *less error prone* and many other reasons. We need a workflow which allows us to write ES6 or above syntax and still be able to ship code which is supported by as many browsers as possible.
* **Be more productive** - this includes next-gen JavaScript, CSS auto prefixing - to achieve the broadest possible browser support, linting etc.

## How

* Use **Dependency Management** tool - *npm* or *yarn*.
* Use **Bundler**  - *Webpack*. Because we want to write modular code.*
* Use **Compiler** - *Babel* + *Presets*. These can be hooked into the webpack configuration so that they are part of this bundling and optimization process.
* Use a **Development Server** - to test out app locally on out machine.
* All of this setup is made very easy with **create-react-app** node package.
