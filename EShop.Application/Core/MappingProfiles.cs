using AutoMapper;
using EShop.Application.Address.Dtos;
using EShop.Application.Categories.Dtos;
using EShop.Application.OffersWidget.Dtos;
using EShop.Application.Orders.Dtos;
using EShop.Application.Orders.OrderDetails.Dtos;
using EShop.Application.Photos.Dtos;
using EShop.Application.Products.Dtos;
using EShop.Application.PUnits;
using EShop.Application.Recepies.Dtos;
using EShop.Application.SliderWidget.Dtos;
using EShop.Application.Widget.Headings.Dtos;
using EShop.Application.Widget.Items.Dtos;
using EShop.Domain;
using Microsoft.AspNetCore.Http;


namespace EShop.Application.Core
{
    public class MappingProfiles: Profile
    {
        public MappingProfiles()
        {
            CreateMap<PostCategoryDto, Category>();
            CreateMap<PieceUnit, PieceUnitDto>().ReverseMap();
            CreateMap<Category, GetCategoryDto>()
            .ForMember(x => x.ImageSrc, o => o.ConvertUsing<ImagePathConverter, string>());
            CreateMap<PostProductDto, Product>();
            CreateMap<Product, GetProductDto>()
                .ForMember(x => x.Photos, o => o.MapFrom(p => p.Photos));
            CreateMap<Photo, GetPhotosDto>();
            CreateMap<PostHeadingDto, WidgetHeading>();
            CreateMap<WidgetHeading, GetWidgetHeadingsDto>()
                .ForMember(x => x.widgetItems, o => o.MapFrom(x => x.WidgetItems));
            CreateMap<PostWidgetItemDto, WidgetItems>();
            CreateMap<WidgetItems, GetWidgetItemDto>()
                .ForMember(x => x.ImageSrc, o => o.ConvertUsing<ImagePathConverter, string>());
            CreateMap<PostOfferDto, Offers>();
            CreateMap<Offers, GetOffersDto>()
                .ForMember(x => x.ImageSrc, o => o.ConvertUsing<ImagePathConverter, string>());
            CreateMap<PostSliderDto, Slider>();
            CreateMap<PostRecepiesDto, Receipes>();
            CreateMap<PostRecepieIngredientsDto, ReceipeIngredients>();
            CreateMap<ReceipeIngredients, GetReceipeIngredients>();
            CreateMap<Receipes, GetReceipesDto>()
                .ForMember(x => x.ImageSrc, o => o.ConvertUsing<ImagePathConverter, string>());
            
            CreateMap<Slider, GetSlidersDto>()
                .ForMember(x => x.ImageSrc, o => o.ConvertUsing<ImagePathConverter, string>());
            CreateMap<PostUserAddressDto, UserAddress>();
            CreateMap<UserAddress, GetUserAddressesDto>();
            CreateMap<Product, GetProductShortDto>()
                .ForMember(x => x.Photos, o => o.MapFrom(p => p.Photos));
            CreateMap<Domain.Orders, GetOrdersDto>();
            CreateMap<PostOrderDto, Domain.Orders>()
                .ForMember(x => x.OrderDetails, o => o.MapFrom(p => p.OrderDetails));
               
                
            CreateMap<OrderDetails, GetOrderDetailsDto>()
                .ForMember(x => x.Products, o => o.MapFrom(p => p.Products));
            CreateMap<PostOrderDetailsDto,OrderDetails>();
            CreateMap<AppUser, GetUserDto>();
                
        }

        private class ImagePathConverter : IValueConverter<string, string>
        {
            private IHttpContextAccessor _contextAccessor;

            public ImagePathConverter(IHttpContextAccessor contextAccessor)
            {
                _contextAccessor = contextAccessor;
            }

            public string Convert(string sourceMember, ResolutionContext context)
            {
                return sourceMember + _contextAccessor.HttpContext.Request.Scheme + "://" + _contextAccessor.HttpContext.Request.Host + "/images/";
            }
        }
    }
}
