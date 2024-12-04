```javascript
// app/page.js

export default function Home() {
  return (
    <div>Hello</div>
  );
}
```
The solution is to use the `page.js` file convention in your pages directory instead of a functional component.  This ensures all features and middleware behave as expected.