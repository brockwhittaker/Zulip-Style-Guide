# Forms, Buttons and Inputs

## A guide to the form and input styling used across the Zulip codebase.

---

There are a multitude of client-side input types that are used across the Zulip internal application to interface with the server. Some of these include `<button>`, `<input>` (text, email, search, password, checkbox), and `<select>`.

### Buttons

There are three predominant button styles – standard, confirm, and danger; black, green, and red respectively.

<div class="shadow" data-name="buttons">
<div class="new-style">
<span class="editable-content">
    <button type="button" class="button white rounded">Button</button>
    <button type="button" class="button white sea-green rounded">Button</button>
    <button type="button" class="button white btn-danger rounded">Button</button>
</span>
</div>
</div>

```html
<button type="button" class="button white rounded">Button</button>
<button type="button" class="button white sea-green rounded">Button</button>
<button type="button" class="button white btn-danger rounded">Button</button>
```

### Inputs

#### Text, Search, Password

There are many types of inputs used in the Zulip open source project's front end code base. The styling is similar to the default bootstrap styling with a few key divergences.

<div class="shadow" data-name="buttons">
<div class="new-style">
<span class="editable-content">
<div class="input-group" style="margin-top: 5px">
    <label>Full name</label>
    <input type="text" placeholder="John Doe" style="height: auto; margin-bottom: 0px" />
</div>
<div class="input-group" style="margin-bottom: 5px">
    <label>Password</label>
    <input type="password" style="height: auto; margin-bottom: 0px" />
</div>
</span>
</div>
</div>

```html
<div class="input-group">
    <label>Full name</label>
    <input type="text" placeholder="John Doe" />
</div>
<div class="input-group">
    <label>Password</label>
    <input type="password" />
</div>
```

#### Checkbox

This component is overridden and is formed with a combination of an `<input type="checkbox" />` and `<span>` element in the arrangement `input[type=checkbox] + span` to override the default webkit styling for checkboxes while still utilizing HTML toggle capabilities.

<div class="shadow">
<div class="new-style">
<div class="input-group" style="margin: 2px 0px">
    <label class="checkbox">
        <input type="checkbox">
        <span></span>
    </label>
    <label class="inline-block">Desktop notifications</label>
</div>
</div>
</div>

```html
<div class="input-group">
    <label class="checkbox">
        <input type="checkbox">
        <span></span>
    </label>
    <label class="inline-block">Desktop notifications</label>
</div>
```
