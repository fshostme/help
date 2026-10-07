# Account and Security

Manage your FSHOST account: your email, your password, two factor authentication and the devices you are logged in on. These settings apply to both free and Pro servers.

## Open Your Settings

1. Log in at [fshost.me](https://fshost.me)
2. Click your username in the top right corner
3. Click **Settings**

The settings have two tabs: **Account** and **Security**.

## Account Tab

| Setting | What you can do |
|---------|-----------------|
| **Username** | Shown only. To change it, contact us |
| **Email** | Change the email you log in with and receive emails on |
| **Password** | Links to the **Security** tab |
| **Delete your account** | Permanently remove your account |

### Change Your Email

1. Click **Change email**
2. Enter your **Current password** (only asked if your account has a password)
3. Enter the **New email**
4. Click **Send confirmation link**

Your email does not change yet. We send a link to the new address, and the change only takes effect once you click it. The link is valid for 1 hour.

While you wait, the page shows **Waiting for confirmation** with the new address. If you typed it wrong, click **Cancel change** and request a new one.

::: tip Link Not Arriving
Check the spam folder of the new address. If the hour has passed, cancel the change and send a new link.
:::

## Security Tab

### Password

Change the password you log in with:

1. Enter your **Current password**
2. Enter a **New password** and type it again under **Confirm password**
3. Click **Update password**

A password must be 8 to 50 characters and contain uppercase letters, lowercase letters and numbers.

If you signed up with Google or Discord, your account has no password yet. Enter one under **Password** and **Confirm password** and click **Set password**. This gives you a second way to log in if you ever lose access to your Google or Discord account.

### Two Factor Authentication

Two factor authentication (2FA) asks for a code from an authenticator app every time you log in, so a stolen password alone is not enough to get into your account. Any authenticator app works, for example Google Authenticator, Microsoft Authenticator, Authy or a password manager with 2FA support.

#### Step 1: Enable 2FA

Click **Enable** under **Two Factor Authentication**. You may be asked for your password.

#### Step 2: Scan the QR Code

Scan the QR code with your authenticator app. If you cannot scan it, type the **Setup Key** into the app instead.

#### Step 3: Confirm the Code

Enter the 6 digit code from the app in the **Code** field and click **Confirm**. The page then says **You have enabled two factor authentication.**

#### Step 4: Save Your Recovery Codes

After confirming, a list of recovery codes is shown. Store them in a password manager or another safe place.

::: danger Keep Your Recovery Codes
If you lose your phone or authenticator app, a recovery code is the only way into your account. Each code works once. Click **Regenerate Recovery Codes** to get a fresh list, which makes the old codes stop working.
:::

#### Logging In With 2FA

After entering your password, the **Authentication code** page asks for the code from your app. Enter it and click **Verify**.

Without your app, click **log in using a recovery code** and enter one of your recovery codes instead. That code is then removed from your list.

#### Turn 2FA Off

Click **Disable** under **Two Factor Authentication**. We recommend keeping it on.

### Connected Accounts

Link Google or Discord to log in with one click instead of typing your password.

- Click **Link** next to a provider to connect it
- Click **Unlink** to remove it

If your account has no password and only one connected account, you cannot unlink it. Set a password first, or link a second account, so you always have a way in.

### Browser Sessions

This lists the browsers and devices that are logged in to your account. The one you are using now is marked **This device**.

To log out everywhere else:

1. Click **Logout Other Browser Sessions**
2. Enter your **Current Password**
3. Click **Confirm**

::: warning Think Your Account Is Compromised?
Log out other browser sessions, change your password and enable two factor authentication. If you see changes on your servers you did not make, check the **Actions** tab on each server and contact [Pro Support](https://fshost.me/pro/support).
:::

## Delete Your Account

On the **Account** tab, click **Delete account** under **Delete your account**.

::: danger Deletion Is Permanent
Your account and everything attached to it is deleted, not hidden. It cannot be undone.
:::

If you still have a server online or are part of an active mix, you have to tick a box for each before you can continue:

- **Active Server** - Your server is stopped when the account is deleted
- **Active Mixes** - You leave the mix, and it is abandoned

Then click **Delete Account** and confirm with your password.

You cannot delete your account yourself if:

- **The account is less than a day old.** This stops abuse. Wait a day and try again.
- **You have made a top-up or been given credits.** By law we have to keep a record of payments. Contact [Pro Support](https://fshost.me/pro/support) with the **Account** category instead.

## Troubleshooting

::: details I lost my phone and cannot log in
Use one of your recovery codes. On the **Authentication code** page, click **log in using a recovery code**. Once you are in, go to **Security**, disable two factor authentication and set it up again on your new phone. If you have no recovery codes left, contact us on [Discord](https://fshost.me/discord).
:::

::: details I cannot unlink Google or Discord
Your account has no password and that is your only connected account. Set a password on the **Security** tab first, then unlink.
:::

::: details I want to change my username
Usernames cannot be changed from the settings. Contact us and we can change it for you.
:::

::: details Deleting my account shows an error
Accounts less than a day old, and accounts that have ever made a top-up, cannot be deleted from the settings. Wait a day, or open a ticket on [Pro Support](https://fshost.me/pro/support) for a paid account.
:::
