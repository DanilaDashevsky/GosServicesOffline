using GosServices.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;


namespace GosServices.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Entrance()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Entrance([Bind("Name", "Password")] Person person)
        {
            if (person != null)
                if (person.Name != null && person.Password == "123456")
                {
                    
                    var searchPerson = await context.persons.FirstOrDefaultAsync(x => x.Phone == person.Name || x.Email == person.Name);
                   if (searchPerson != null)
                   {
                        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, await Authenticate(searchPerson));
                        return RedirectToAction("Free");
                   }
                    else return View();
                } 
                else
                    return View();
            else
                return View();
        }

        public IActionResult Registration()
        {
            return View();
        }

        public static DataContext context = Program.context;
                [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Registration([Bind("Surname", "Name","Phone","Email")]Person person)
        {
            if(person!=null)
            if (person.Name != null&& person.Surname != null && person.Email != null && person.Phone != null) {
                context.persons.Add(person);
                context.SaveChanges();
                    await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, await Authenticate(person));
                    return RedirectToAction("CodeVerification");
            } 
            else
            return View();
            else return View();
        }
       public static async Task<ClaimsPrincipal> Authenticate(Person person)
        {
            var claimSurname = new Claim("Surname", person.Surname);
            var claimName = new Claim("Name", person.Name);
            var claimPhone = new Claim("Phone", person.Phone);
            var claimEmail = new Claim("Email", person.Email);
            List<Claim> claims = new List<Claim> { claimSurname, claimName, claimEmail, claimPhone };
            var claimIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var claimPrincipal = new ClaimsPrincipal(claimIdentity);
            return claimPrincipal;
        }
        public IActionResult Free()
        {
            return View();
        }
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
                if (check.SearchText.IndexOf("Раб") != -1 || check.SearchText.IndexOf("раб") != -1)
            { 
                return RedirectToAction("Main", "Workless1"); 
            }
            return View();


        }
        public IActionResult CodeVerification()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult CodeVerification(Check check)
        {
            List<string> arrayImage = new List<string>{ "24ИИЙ6", "7ФГ58Ж9", "9Д7ШЦЛЯ", "Г4Ш2ГИ", "ГЛЮДЯИ", "ФШП7Л6" };
            if (check != null)
                if (arrayImage.Contains(check.CheckCode))
                { 
                    return RedirectToAction("Free"); 
                }
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}