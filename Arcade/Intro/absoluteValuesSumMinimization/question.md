<div class="markdown -arial"><p>Given a sorted array of integers <code>a</code>, your task is to determine which element of <code>a</code> is <em>closest</em> to all other values of <code>a</code>. In other words, find the element <code>x</code> in <code>a</code>, which minimizes the following sum:</p>

<p>(where <code>abs</code> denotes the absolute value)</p>
<p>If there are several possible answers, output the <em>smallest</em> one.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>a = [2, 4, 7]</code>, the output should be <code>solution(a) = 4</code>.</p>
<ul>
<li>for <code>x = 2</code>, the value will be <code>abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7</code>.</li>
<li>for <code>x = 4</code>, the value will be <code>abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5</code>.</li>
<li>for <code>x = 7</code>, the value will be <code>abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8</code>.</li>
</ul>
<p>The lowest possible value is when <code>x = 4</code>, so the answer is <code>4</code>.</p>
</li>
<li>
<p>For <code>a = [2, 3]</code>, the output should be <code>solution(a) = 2</code>.</p>
<ul>
<li>for <code>x = 2</code>, the value will be <code>abs(2 - 2) + abs(3 - 2) = 1</code>.</li>
<li>for <code>x = 3</code>, the value will be <code>abs(2 - 3) + abs(3 - 3) = 1</code>.</li>
</ul>
<p>Because there is a tie, the smallest <code>x</code> between <code>x = 2</code> and <code>x = 3</code> is the answer.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 5 seconds (ts)</strong></p>
</li>
<li>
<p><strong>[input] array.integer a</strong></p>
<p>A non-empty array of integers, sorted in ascending order.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ a.length ≤ 1000</code>,<br>
<code>-10<sup>6</sup> ≤ a[i] ≤ 10<sup>6</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>An integer representing the element from <code>a</code> that minimizes the sum of its absolute differences with all other elements.</p>
</li>
</ul>

<pre><code class="language-typescript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">helloWorld</span>(<span class="hljs-params">name: <span class="hljs-built_in">string</span></span>): <span class="hljs-built_in">string</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"This prints to the console when you Run Tests"</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}

</code></pre>
</div>