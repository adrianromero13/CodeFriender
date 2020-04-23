<form class="ui form">
  <div class="equal width fields">
    <div class="field">
      <label for="form-input-control-first-name">First name</label>
      <div class="ui input">
        <input type="text" placeholder="First name" id="form-input-control-first-name" />
      </div>
    </div>
    <div class="field">
      <label for="form-input-control-last-name">Last name</label>
      <div class="ui input">
        <input type="text" placeholder="Last name" id="form-input-control-last-name" />
      </div>
    </div>
    <div class="field">
      <label for="form-select-control-gender">Gender</label>
      <div role="combobox" aria-expanded="false" class="ui search selection dropdown">
        <input
          type="text"
          id="form-select-control-gender"
          aria-autocomplete="list"
          autocomplete="off"
          class="search"
          tabindex="0"
          value=""
        />
        <div class="default text" role="alert" aria-live="polite" aria-atomic="true">Gender</div>
        <i aria-hidden="true" class="dropdown icon"></i>
        <div role="listbox" class="menu transition">
          <div
            style="pointer-events:all"
            role="option"
            aria-checked="false"
            aria-selected="true"
            class="selected item"
          >
            <span class="text">Male</span>
          </div>
          <div
            style="pointer-events:all"
            role="option"
            aria-checked="false"
            aria-selected="false"
            class="item"
          >
            <span class="text">Female</span>
          </div>
          <div
            style="pointer-events:all"
            role="option"
            aria-checked="false"
            aria-selected="false"
            class="item"
          >
            <span class="text">Other</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="field">
    <label for="form-textarea-control-opinion">Opinion</label>
    <textarea placeholder="Opinion" id="form-textarea-control-opinion" rows="3"></textarea>
  </div>
  <div class="error field">
    <label for="form-input-control-error-email">Email</label>
    <div
      class="ui pointing below prompt label"
      id="form-input-control-error-email-error-message"
      role="alert"
      aria-atomic="true"
    >
      Please enter a valid email address
    </div>
    <div class="ui input">
      <input
        type="text"
        aria-describedby="form-input-control-error-email-error-message"
        aria-invalid="true"
        placeholder="joe@schmoe.com"
        id="form-input-control-error-email"
      />
    </div>
  </div>
  <div class="field">
    <label for="form-button-control-public">Label with htmlFor</label>
    <button id="form-button-control-public" class="ui button">Confirm</button>
  </div>
</form>