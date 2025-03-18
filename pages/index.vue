<script>
import { dialog } from "@swedbankpay/design-guide";
dialog?.init();
</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    <h2>Some random Design System things to test</h2>
    <h3>Buttons</h3>
    <button class="btn btn-primary btn-xl" type="button">Primary button</button>
    <button class="btn btn-secondary btn-xl" type="button">
      Secondary button
    </button>
    <button class="btn btn-tertiary" type="button">Tertiary button</button>
    <button
      class="btn btn-icon btn-lg btn-secondary"
      type="button"
      aria-label="Describe this action"
      title="Describe this action"
    >
      <i class="at-cloud-database" aria-hidden="true"></i>
    </button>
    <h3>Dialog</h3>
    <button
      class="btn btn-primary"
      type="button"
      data-dialog-open="demo-dialog"
    >
      Open dialog
    </button>
    <dialog id="demo-dialog">
      <header>
        <div role="heading">Delete</div>
        <button
          type="button"
          class="dialog-close"
          aria-label="Close dialog"
          data-dialog-close="true"
        ></button>
      </header>
      <div class="dialog-body">
        <p class="mb-0">
          You’re about to permanently delete <i>German Swashbuckle (456)?</i>
        </p>
      </div>
      <footer>
        <button
          class="btn btn-secondary btn-sm"
          type="button"
          data-dialog-close="true"
        >
          Cancel
        </button>
        <button class="btn btn-primary btn-sm" type="button">Delete</button>
      </footer>
    </dialog>
  </div>
</template>
