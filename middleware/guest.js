export default function ({ app, redirect  }) 
{
    console.log("logged in", app.$auth.loggedIn);
    console.log(app.$auth.user);

    if (app.$auth.loggedIn) {
        return redirect('/');
        
    }
}