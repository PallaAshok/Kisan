using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Kisan.Models
{
    public class FarmerModel
    {
        public int? farmerID { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        public string location   { get; set; }

        [Required]
        public string contactNo { get; set; }

        [Required]
        public string panNo { get; set; }

        [Required]
        public string bankAccountNo { get; set; }
    }
}