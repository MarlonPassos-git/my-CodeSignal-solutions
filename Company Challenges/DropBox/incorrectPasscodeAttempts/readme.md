<p>One Very Important User (VIU) has a Very Confidential Document (VCD) stored on his Dropbox account. He doesn't let anyone see the VCD, especially his roommates who often have access to his devices.</p>
<p>Opening the Dropbox mobile app on the VIU's tablet requires a four-digit passcode. To ensure the confidentiality of the stored information, the device is locked out of Dropbox after <code>10</code> <strong>consecutive</strong> failed passcode attempts. We need to implement a function that, given an array of <code>attempts</code> made throughout the day and the correct <code>passcode</code>, checks to see if the device should be locked, i.e. <code>10</code> or more consecutive failed passcode attempts were made.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For<br>
<code>passcode = "1111"</code> and</p>
<pre><code>attempts = ["1111", "4444",
            "9999", "3333",
            "8888", "2222",
            "7777", "0000",
            "6666", "7285",
            "5555", "1111"]
</code></pre>
<p>the output should be<br>
<code>incorrectPasscodeAttempts(passcode, attempts) = true</code>.</p>
<p>The first attempt is correct, so the user must have successfully logged in. However, the next <code>10</code> consecutive attempts are incorrect, so the device should be locked. Thus, the output should be <code>true</code>.</p>
</li>
<li>
<p>For<br>
<code>passcode = "1234"</code> and</p>
<pre><code>attempts = ["9999", "9999",
            "9999", "9999",
            "9999", "9999",
            "9999", "1234",
            "9999", "9999",
            "9999", "9999"]
</code></pre>
<p>the output should be<br>
<code>incorrectPasscodeAttempts(passcode, attempts) = false</code>.</p>
<p>There are only <code>9</code> consecutive incorrect attempts, so there's no need to lock the device.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string passcode</strong></p>
<p>String consisting of exactly <code>4</code> digits representing the correct passcode.</p>
<p><em>Guaranteed constraints:</em><br>
<code>passcode.length = 4</code>.</p>
</li>
<li>
<p><strong>[input] array.string attempts</strong></p>
<p>Array representing the passcode attempts in the order they were made. Each element of <code>attempts</code> is a string consisting of exactly <code>4</code> digits.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ attempts.length ≤ 20</code>,<br>
<code>attempts[i].length = 4</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p><code>true</code> if <code>10</code> or more consecutive failed passcode attempts were made, <code>false</code> otherwise.</p>
</li>
</ul>
