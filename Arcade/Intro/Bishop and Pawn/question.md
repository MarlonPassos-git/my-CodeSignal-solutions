<div class="markdown -arial"><p>Given the positions of a white <code>bishop</code> and a black <code>pawn</code> on the standard chess board, determine whether the bishop can capture the pawn in one move.</p>
<p>The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:<br>
<img src="https://codesignal.s3.amazonaws.com/uploads/1664394254/bishop.jpg" alt=""></p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>bishop = "a1"</code> and <code>pawn = "c3"</code>, the output should be<br>
<code>solution(bishop, pawn) = true</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1664394255/ex1.jpg" alt=""></p>
</li>
<li>
<p>For <code>bishop = "h1"</code> and <code>pawn = "h3"</code>, the output should be<br>
<code>solution(bishop, pawn) = false</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1664394255/ex2.jpg" alt=""></p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 5 seconds (ts)</strong></p>
</li>
<li>
<p><strong>[input] string bishop</strong></p>
<p>Coordinates of the white bishop in the <a href="keyword://chess-notation" target="_blank">chess notation</a>.</p>
<p><em>Guaranteed constraints:</em><br>
<code>bishop.length = 2</code>,<br>
<code>'a' ≤ bishop[0] ≤ 'h'</code>,<br>
<code>1 ≤ bishop[1] ≤ 8</code>.</p>
</li>
<li>
<p><strong>[input] string pawn</strong></p>
<p>Coordinates of the black pawn in the same notation.</p>
<p><em>Guaranteed constraints:</em><br>
<code>pawn.length = 2</code>,<br>
<code>'a' ≤ pawn[0] ≤ 'h'</code>,<br>
<code>1 ≤ pawn[1] ≤ 8</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p><code>true</code> if the bishop can capture the pawn, <code>false</code> otherwise.</p>
</li>
</ul>


</div>