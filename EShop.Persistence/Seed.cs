using EShop.Domain;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName="Towseef Ahmed", UserName="towseef", Email="towseef@gmail.com"}
                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            if (context.Categories.Any()) return;

            var category = new List<Category>
            {
                new Category
                {
                    Title= "Fish",
                    ArabicTitle="سمكة",
                    CreatedOn= DateTime.Now,
                    ImageName="f4aae1d6-7216-48e7-8ebe-0d2aa6e23a24.png",
                    ShowInNav=true
                },
                  new Category
                {
                    Title= "Chicken",
                    ArabicTitle="دجاج",
                    CreatedOn= DateTime.Now,
                    ImageName="857bff14-df11-4891-880b-8ee85bd38d5f.png",
                    ShowInNav=true
                },
                 new Category
                {
                    Title= "Mutton",
                    ArabicTitle="لحم",
                    CreatedOn= DateTime.Now,
                    ImageName="e0efb1f9-ea2b-4640-b197-34f19aac33d8.png",
                    ShowInNav=true
                },
                  new Category
                {
                    Title= "Eggs",
                    ArabicTitle="بيض",
                    CreatedOn= DateTime.Now,
                    ImageName="5fe52589-3465-44e2-bae9-5aaa06d0026e.png",
                    ShowInNav=true
                },
                    new Category
                {
                    Title= "Prawn",
                    ArabicTitle="جمبري",
                    CreatedOn= DateTime.Now,
                    ImageName="609b50cf-f444-4f7d-92a5-3917d634feca.png",
                    ShowInNav=true
                },
                    new Category
                {
                    Title= "Spreads",
                    ArabicTitle="انتشار",
                    CreatedOn= DateTime.Now,
                    ImageName="e1db63cd-286b-4825-a1b8-b408966deaf1.png",
                    ShowInNav=true
                },


            };
            await context.Categories.AddRangeAsync(category);
            await context.SaveChangesAsync();
        }
    }
}
