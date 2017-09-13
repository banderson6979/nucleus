## Welcome Nucleus

This is a simple invoice and tracking application suited for small companies. It helps you in managing your daily task in your daily business: track activities, expenses and invoices.

What can you do with Nucleus?

- Tracking your daily job activities
- Managing the job orders and checking their status
- Creating an invoice
- Generate a pdf-invoice
- Tacking expenses
- Tracking invoice payment status
- View the current status (economics, in/out)
- Managing users
- Managing customers
- Real-time activity tracker
- English and Italian language support
- Added activity expenses with attachment (stored on Amazon S3)
- Weekly activities. Easily insert you activities of the week on one screen.

It's built on **Rails 4.0**.

### Installation
1. Clone the repository
2. Install the gems with `bundle install`
3. Setup the database `rake db:migrate` and `rake db:seed`
4. Start the server `rails s`

### Configuration
There are some settings that you have to set in the setting page.
These are:

- *iva*: vat coeff (VAT Coefficient & Rounding Precision)
- *iban* bank account number
- *dropbox_enabled*: enable/disable dropbox support
- *dropbox_app_key*: dropbox credentials
- *dropbox_app_secret*: dropbox credentials
- *dropbox_token*: dropbox credentials
- *dropbox_secret*: dropbox credentials
- *dropbox_folder*: dropbox folder to use
- *dropbox_app_mode*: dropbox mode
- *footer*: invoice footer (in pure HTML)
- *s3_bucket*: s3 storage bucket name
- *s3_access_key_id*: s3 credential
- *s3_secret_access_key*: s3 credential

To obtain the keys for DROPBOX you can read this https://docs.pingidentity.com/bundle/dropboxConn20_sm_quickConnect/page/dropboxConn_t_obtainAppKeySecretFromDropbox.html

If you want access to S3 you need to configure the bucket on the S3 console and specify the keys on the settings page(s3_access_key_id, s3_secret_access_key).
