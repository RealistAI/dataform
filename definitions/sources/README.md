Sources

Where you define transformations on your data sources. This is where you can create datasets that transform data from your different sources into a consistent format, using the same structure and naming conventions. Some examples of transformations you may want to include at this stage are:

Normalizing sources (ex: ensure email have the same field name in all tables)
Aligning data types (ex: ensure timestamps are in a unique time zone and money fields in dollars)
All subsequent datasets should be built on top of these models, reducing the amount of duplicated code in your project.
