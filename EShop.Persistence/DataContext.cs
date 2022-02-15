using EShop.Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<PieceUnit> PieceUnits { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<WidgetHeading> WidgetHeadings { get; set; }
        public DbSet<WidgetItems> WidgetItems { get; set; }
        public DbSet<Offers> Offers { get; set; }
        public DbSet<Slider> Sliders { get; set; }
        public DbSet<UserAddress> UserAddresses { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<OrderDetails> OrderDetails { get; set; }
        public DbSet<Receipes> Receipes { get; set; }
        public DbSet<ReceipeIngredients> ReceipeIngredients { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Product>(entity =>
            {
                entity.HasOne(c => c.Category)
                .WithMany(p => p.Products)
                .HasForeignKey(c => c.CategoryId)
                .OnDelete(DeleteBehavior.ClientSetNull);
            });
        

            builder.Entity<UserAddress>(entity =>
            {
                entity.HasOne(u => u.user)
                .WithMany(a => a.UserAddresses)
                .HasForeignKey(u => u.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull);
            });

            builder.Entity<Photo>(entity =>
            {
                entity.HasOne(c => c.Product)
                .WithMany(p => p.Photos)
                .HasForeignKey(x => x.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull);
            });

            builder.Entity<Receipes>(entity =>
            {
                entity.HasOne(c => c.Product)
                .WithMany(x => x.Receipes)
                .HasForeignKey(x => x.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull);
            }); 

            builder.Entity<ReceipeIngredients>(entity =>
            {
                entity.HasOne(c => c.Receipes)
                .WithMany(i => i.Ingredients)
                .HasForeignKey(c => c.ReceipeId)
                .OnDelete(DeleteBehavior.ClientSetNull);
            });

            builder.Entity<WidgetItems>(entity =>
            {
                entity.HasOne(w => w.WidgetHeading)
                .WithMany(i => i.WidgetItems)
                .HasForeignKey(x => x.WidgetId)
                .OnDelete(DeleteBehavior.ClientSetNull);
            });

            builder.Entity<OrderDetails>(entity =>
            {
                entity.HasOne(o => o.Orders)
                .WithMany(d => d.OrderDetails)
                .HasForeignKey(x => x.OrderId)
                .OnDelete(DeleteBehavior.ClientSetNull);
            });

          

            builder.Entity<Orders>(entity =>
            {
                entity.HasOne(x => x.User)
                .WithMany(u => u.Orders)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull);
            });
        }
    }
}
