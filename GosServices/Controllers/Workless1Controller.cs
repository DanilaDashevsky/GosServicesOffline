using GosServices.Models;
using Microsoft.AspNetCore.Mvc;

namespace GosServices.Controllers
{
    public class Workless1Controller : Controller
    {
        public IActionResult Main()
        {
            return View();
        }
        [HttpPost]
    
        public IActionResult Main(Check check)
        {
            if (check.SearchText == null)
            { return View(); }
            else
    if (check.SearchText.IndexOf("Гос") != -1 || check.SearchText.IndexOf("гос") != -1)
            {
                return RedirectToAction("Main", "Home");
            }
            return View();
        }


            public IActionResult Page1()
        {
            return View();
        }
        public IActionResult Page12()
        {
            return View();
        }
        public IActionResult Page10()
        {
            return View();
        }
        public IActionResult Page11()
        {
            return View();
        }
        public IActionResult Page13()
        {
            return View();
        }
        public IActionResult Page14()
        {
            return View();
        }
        public IActionResult Page15()
        {
            return View();
        }
        public IActionResult Page2()
        {
            return View();
        }
        public IActionResult Page4()
        {
            return View();
        }
        public IActionResult Page6()
        {
            return View();
        }
        public IActionResult Page71()
        {
            return View();
        }
        public IActionResult Page9()
        {
            return View();
        }
    }
}
