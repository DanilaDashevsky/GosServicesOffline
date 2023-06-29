using GosServices.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

public class Program
{

    public static DataContext context;

  
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

       
        // Add services to the container.
     
        
        builder.Services.AddControllersWithViews();
      
       // string str = builder.Configuration.GetConnectionString("DefaultConnection");
        builder.Services.AddDbContext<DataContext>(options2 => options2.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
     
        DbContextOptionsBuilder<DataContext> optionsBuilder = new DbContextOptionsBuilder<DataContext>();

        DbContextOptions<DataContext>  options2 = optionsBuilder
                  .UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
                  .Options;
        context = new DataContext(options2);
        

        builder.Services.AddAuthentication("Cookies");
        builder.Services.AddAuthentication(
           CookieAuthenticationDefaults.AuthenticationScheme).AddCookie();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Home/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthorization();
        app.UseAuthentication();

        app.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Main}/{id?}");

        app.Run();
    }
}