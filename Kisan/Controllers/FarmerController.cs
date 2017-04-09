using Kisan.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Kisan.Controllers
{
    [RoutePrefix("api/Farmer")]
    //[OutputCacheAttribute(VaryByParam = "*", Duration = 0, NoStore = true)] // will be applied to all actions in MyController, unless those actions override with their own decoration
    public class FarmerController : System.Web.Http.ApiController
    {
        // GET: Farmer
        public System.Web.Http.IHttpActionResult Get()
        {
            DataSet DS = new DataSet();
            DS = BusinessLogicLayer.GET_FARMER_RELATED_DATA(null);
            return Ok(DS);
        }
        // POST: Farmer
        public System.Web.Http.IHttpActionResult Post(FarmerModel Farmer)
        {
            DataSet DS = new DataSet();
            DS = BusinessLogicLayer.FARMER_DETAILS_INSERT_UPDATE(Farmer.farmerID, Farmer.name, Farmer.location, Farmer.contactNo, Farmer.panNo, Farmer.bankAccountNo);
            return Ok();
        }
        // DELETE: Farmer
        public System.Web.Http.IHttpActionResult Delete(int farmerID)
        {
            return Ok();
        }
    }
}