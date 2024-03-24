/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",

  routes(defineRoutes) {
    return defineRoutes((route) => {
      // Auth
      route('/auth', 'routes/auth/layout.tsx', () => {
        route('registration', 'routes/auth/registration/route.tsx');
        route('login', 'routes/auth/login/route.tsx');
      });

      // Dashboard
      route('', 'routes/_nav/layout.tsx', () => {
        route('/dashboard', 'routes/_nav/dashboard/route.tsx');
        route('/settings', 'routes/_nav/settings/layout.tsx', () => {
          route('profile', 'routes/_nav/settings/profile/route.tsx');
        });
        route('/users', 'routes/_nav/users/route.tsx');
        route('/user', 'routes/_nav/user/route.tsx');
        route('/project', 'routes/_nav/project/route.tsx');
      });
    });
  },
};
