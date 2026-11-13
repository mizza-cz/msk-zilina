(function ($) {
  "use strict";

  const DESKTOP_WIDTH = 1200;

  function bindHamburger() {
    const $body = $("body");
    const $opener = $(".js-header__opener");
    const $close = $(".js-mobile-menu-close");

    $opener.on("click", function (e) {
      e.stopPropagation();
      $opener.toggleClass("is-open");
      $body.toggleClass("is-nav-open");
    });

    $close.on("click", function (e) {
      e.stopPropagation();
      $opener.removeClass("is-open");
      $body.removeClass("is-nav-open");
    });

    $(document).on("click", function (e) {
      if (
        $body.hasClass("is-nav-open") &&
        !$(e.target).closest(".menu, .mobileMenu, .js-header__opener").length
      ) {
        $opener.removeClass("is-open");
        $body.removeClass("is-nav-open");
      }
    });
  }

  function bindMainMenu() {
    const $menuItems = $(".navbar__menu-item");
    const $menuLists = $(".navbar__menu-list");
    let t;

    function unbindAll() {
      $menuItems.off("click");
      $menuLists.off("mouseenter mouseleave");
    }

    function bindDesktop() {
      $menuLists
        .on("mouseenter", function () {
          $(this).addClass("active");
        })
        .on("mouseleave", function () {
          $(this).removeClass("active");
        });
    }

    function bindMobile() {
      $menuItems.on("click", function (e) {
        const $cur = $(this).closest(".navbar__menu-list");
        $menuLists.not($cur).removeClass("active");
        $cur.toggleClass("active");
        e.stopPropagation();
      });
    }

    function refresh() {
      unbindAll();
      $(window).width() >= DESKTOP_WIDTH ? bindDesktop() : bindMobile();
    }

    refresh();

    $(window).on("resize", function () {
      clearTimeout(t);
      t = setTimeout(refresh, 200);
    });
  }

  function bindStickyHeader() {
    const $header = $(".header");
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          $("html, body").scrollTop() > 0
            ? $header.addClass("header--scroll")
            : $header.removeClass("header--scroll");
          ticking = false;
        });

        ticking = true;
      }
    }

    $(window).on("scroll", onScroll);
    onScroll();
  }
  function bindMobileMenuScreens() {
    const $menu = $(".mobileMenu");
    if (!$menu.length) return;

    let history = ["root"];

    function showScreen(screen) {
      $menu.find(".mobileMenu__screen").removeClass("is-active");
      $menu.find(`[data-mobile-screen="${screen}"]`).addClass("is-active");
    }

    function resetMenu() {
      history = ["root"];
      showScreen("root");
    }

    $menu.on("click", "[data-mobile-go]", function (e) {
      e.preventDefault();

      const next = $(this).data("mobile-go");

      history.push(next);
      showScreen(next);
    });

    $menu.on("click", "[data-mobile-back]", function (e) {
      e.preventDefault();

      if (history.length > 1) {
        history.pop();
      }

      showScreen(history[history.length - 1]);
    });

    $(".js-mobile-menu-close").on("click", resetMenu);
  }

  $(function () {
    bindHamburger();
    bindMainMenu();
    bindMobileMenuScreens();
    bindStickyHeader();
  });
})(jQuery);
