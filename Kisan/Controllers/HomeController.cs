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
