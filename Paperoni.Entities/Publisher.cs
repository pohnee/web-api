﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paperoni.Entities
{
    public class Publisher : IEntity
    {
        public Guid ID { get; set; }
        public string Name { get; set; }

        public ICollection<BookPublisher> BookPublishers { get; set; }
    }
}
