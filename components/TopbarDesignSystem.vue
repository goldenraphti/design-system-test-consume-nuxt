<script>
import { topbar } from "@swedbankpay/design-guide";
topbar.init();
</script>

<template>
  <div class="container-fluid">
    <header class="topbar topbar-xl-wide experimental" id="demo-topbar">
      <div class="nav-container">
        <a class="topbar-logo" href="/" aria-label="To homepage">
          <img
            src="@swedbankpay/design-guide/src/img/swedbankpay/logo/swedbankpay-logo-h.svg"
            alt="swedbankpay logo"
            class="logotype-horizontal logotype-sm"
          />
        </a>

        <nav class="topbar-nav">
          <div class="topbar-link-container">
            <div class="topbar-modal-header">
              <button
                type="button"
                class="topbar-close btn btn-icon btn-xs"
                aria-label="Close menu"
                title="Close menu"
              >
                <i class="swepay-icon-close" aria-hidden="true"></i>
              </button>
            </div>
            <div class="topbar-modal-body">
              <a href="#" class="active pinned">
                <span>Home</span>
              </a>
              <a href="#" class="pinned">
                <span>Merchant details</span>
              </a>
              <a href="#">
                <span>Transactions</span>
              </a>
              <a href="#">
                <span>User profile</span>
              </a>
              <a href="#">
                <span>Statistics</span>
              </a>
              <a href="#">
                <span>Transactions</span>
              </a>
              <a href="#">
                <span>User profile</span>
              </a>
              <a href="#">
                <span>Statistics</span>
              </a>
              <a href="#">
                <span>Transactions</span>
              </a>
              <a href="#">
                <span>User profile</span>
              </a>
              <a href="#">
                <span>Statistics</span>
              </a>
              <a href="#" class="pinned">
                <span>Users</span>
              </a>
              <a href="#">
                <span>Access tokens</span>
              </a>
              <a href="#">
                <span>Contact us</span>
              </a>
              <a href="#" class="pinned topbar-link-right">
                <span>Switch to acquiring</span>
                <i
                  class="at-movement-arrows-left-right small"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="#">
                <span>Change company</span>
                <i class="at-arrow-right small" aria-hidden="true"></i>
              </a>
            </div>
            <div class="topbar-modal-footer">
              <button class="btn btn-secondary btn-sm" type="button">
                <i class="exit_to_app" aria-hidden="true"></i>
                <span>Log out</span>
              </button>
            </div>
          </div>
        </nav>
        <button
          type="button"
          class="topbar-btn"
          aria-label="Open menu"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-controls="topbar-nav"
        >
          <i
            class="swepay-icon-menu-hamburger topbar-btn-icon"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </header>
    <main class="topbar-content"></main>
  </div>
</template>
