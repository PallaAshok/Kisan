using Kisan.Models;
using Microsoft.AspNet.Identity;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Kisan.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : System.Web.Http.ApiController
    {
 
        // POST api/Account/Register
        [AllowAnonymous]
        [Route("Register")]
        public async Task<System.Web.Http.IHttpActionResult> Register(UserModel userModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
 
            //IdentityResult result = await _repo.RegisterUser(userModel);

            //System.Web.Http.IHttpActionResult errorResult = GetErrorResult(result);
 
            //if (errorResult != null)
            //{
            //    return errorResult;
            //}
 
            return Ok();
        }
 
        private System.Web.Http.IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return InternalServerError();
            }
 
            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }
 
                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return BadRequest();
                }
 
                return BadRequest(ModelState);
            }
 
            return null;
        }
    }
}