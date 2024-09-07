# Parcel
- Dev Build creation
- Local server creation
- HMR (Hot Module Replacement)
- File watching algortithm - wriiten in C++ 
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compression
- Code Splitting
- Differential Bundling
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

/**
 * Header
 *  -Logo 
 *  -Nav items
 * Body
 *  -Search 
 *  -Restaurant container
 *    -Restaurant cards
 *      -img
 *      - Name of res, Start rating, cuisine,delivery time 
 * Footer 
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

 Two Types of export

-Default Export/Import

 export default component
 import component from "path";

 -Named Export/Import

 export const component;
 import {component} from "path";

 # React Hooks
 - Normal JS utility functions
 - Written by FB developers
 - useState() - Superpowerful State variables in react
 - useEffect()

 # Redux
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice (cardSlice)
 - dispatch(action)
 - Selector

# Types of Testing
- Unit testing
- Integration testing
- End to end testing

# Setting up Testing in our app
- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- jest -npx jest --init
- Install jsdom library
- Install @babel/preset to make JSX work in test cases
- Include @babel/preset-raect inside my babel config
- Install @testing-library/jest-dom


_ _ in tests is called dunder