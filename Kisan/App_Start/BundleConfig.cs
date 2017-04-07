using System.Web;
using System.Web.Optimization;

namespace Kisan
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include("~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include("~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs").Include("~/Scripts/angular/angular.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularMaterial").Include("~/Scripts/angular-material/angular-material.js",
                                                                        "~/Scripts/angular-animate/angular-animate.js",
                                                                        "~/Scripts/angular-aria/angular-aria.js",
                                                                        "~/Scripts/angular-messages.js"));

            bundles.Add(new ScriptBundle("~/bundles/Customjs").Include("~/Scripts/Kisan/KisanMaster.js",
                                                                       "~/Scripts/Kisan/Login.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/angular-material.css"));
        }
    }
}
