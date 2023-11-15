import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useLocation, useNavigate } from "@builder.io/qwik-city";
import { cn } from "~/libs/utils";

export default component$(() => {
  const nav = useNavigate();
  const loc = useLocation();

  const SIDE_NAVAIGATION_ITEMS = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Customers",
      url: "/customers/",
    },
    {
      name: "Team",
      url: "/team/",
    },
  ];

  return (
    <div class="drawer w-max lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer-2"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <ul class="menu min-h-full w-60 gap-2 bg-base-200 p-4 text-base-content">
          {SIDE_NAVAIGATION_ITEMS.map((route, idx) => {
            const isActive = loc.url.pathname === route.url;
            return (
              <li
                key={idx}
                class={
                  isActive
                    ? "rounded-lg bg-neutral text-neutral-content hover:cursor-default"
                    : ""
                }
              >
                <Link
                  key={idx}
                  class={
                    isActive
                      ? "hover:cursor-default hover:text-neutral-content"
                      : ""
                  }
                  href={route.url}
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
