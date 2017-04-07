using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Kisan.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Kisan Home Page";
            return View();
        }
        public ActionResult Login()
        {
            ViewBag.Title = "Kisan Login";
            return View();
        }
    }
}
