import { createRouter, createWebHashHistory } from "vue-router";
import isautenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/pokemon",
    name: "pokemon",

    component: () =>
      import(
        /*webpackChunkName:"pokemon"*/ "@/modules/pokemon/layouts/PokemonLayout.vue"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /*webpackChunkName:"list"*/ "../modules/pokemon/pages/ListPage.vue"
          ),
      },

      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /*webpackChunkName:"about"*/ "../modules/pokemon/pages/AboutPage.vue"
          ),
      },

      {
        path: "pokemon/:id",
        name: "pokemon-id",
        component: () =>
          import(
            /*webpackChunkName:"pokemon"*/ "../modules/pokemon/pages/PokemonPage.vue"
          ),
        props: (route) => {
          const id = Number(route.params.id);

          return isNaN(id) ? { id: 1 } : { id: id };
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-about" },
      },
    ],
  },

  {
    path: "/dbz",
    name: "dbz",
    beforeEnter: [isautenticatedGuard],
    component: () =>
      import(
        /*webpackChunkName:"dragonLayout"*/ "../modules/dbz/layout/DragonBallLayout.vue"
      ),
    children: [
      {
        path: "about",
        name: "dbz-about",
        component: () =>
          import(
            /*webpackChunkName:"dragonAbout"*/ "../modules/dbz/pages/About.vue"
          ),
      },
      {
        path: "characters",
        name: "dbz-characters",
        component: () =>
          import(
            /*webpackChunkName:"dragonChraracters"*/ "../modules/dbz/pages/Characters.vue"
          ),
      },

      {
        path: "",
        redirect: { name: "dgz-about" },
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName:"nopage"*/ "../modules/shared/pages/noPage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//guard global sincrono

// router.beforeEach((to, from, next) => {
//   const random = Math.random() * 100;
//   if (random > 50) {
//     console.log("autenticado");
//     next();
//   } else {
//     console.log(random, "blouqeado por el beforeEach");

//     next({ name: "pokemon-home" });
//   }
// });

//guard global asincrono

// const conAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;
//     if (random > 50) {
//       console.log('autorizado');
//       resolve(true);
//     } else {
//       console.log(random, "blouqeado por el beforeEach");
//       resolve(false);
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const authorized = await conAccess();

//   authorized ? next() : next({ name: "pokemon-home" });
// });

export default router;
