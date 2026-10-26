// Source-only static preview; no research files or local configuration are packaged.
import {execFileSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {dirname, resolve, join, relative, sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const prefix='tools/workbench/app/dist/';
const out=join(root,'_site');
assert(!existsSync(out),'Use a clean checkout: an existing _site is never overwritten or deleted.');
const git=(...args)=>execFileSync('git',['-C',root,...args],{windowsHide:true,encoding:'utf8'}).trim();
const files=git('ls-files','--',prefix).split('\n').filter(Boolean);
assert(files.length>20&&files.includes(prefix+'index.html')&&files.includes(prefix+'guide.html'));
const forbidden=/(?:^|\/)(?:\.env[^/]*|\.venv|\.runtime[^/]*|\.pdf-editor\.local\.json|tmp|output|coordination)(?:\/|$)|\.(?:pdf|docx|wav|mp3|zip)$/i;
const packaged=[];
for(const path of files){
  assert(path.startsWith(prefix)&&!forbidden.test(path),'Unexpected static path');
  const name=path.slice(prefix.length), destination=resolve(out,name);
  assert(!name.includes('..')&&relative(out,destination)&&!relative(out,destination).startsWith('..'+sep));
  const bytes=readFileSync(join(root,path));
  mkdirSync(dirname(destination),{recursive:true});
  writeFileSync(destination,bytes,{flag:'wx'});
  packaged.push({path:name,sha256:createHash('sha256').update(bytes).digest('hex')});
}
const receipt={schema:'falsify.branch-preview.v1',
  sourceRepository:'https://github.com/Shinick-Han/falsify-branch-preview',previewCommit:git('rev-parse','HEAD'),
  teamRepository:'https://github.com/Pseudo-Lab/Falsify',teamBranch:'feat/workbench-html-guide-20261012',
  teamSourceCommit:'922e58b6e3f67c51b50051bc550a0b5de3a4473c',
  unofficial:true,staticOnly:true,modelCalls:false,files:packaged};
writeFileSync(join(out,'preview-source.json'),JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
writeFileSync(join(out,'.nojekyll'),'');
console.log(JSON.stringify({staticFiles:files.length,previewCommit:receipt.previewCommit,teamSourceCommit:receipt.teamSourceCommit,staticOnly:true}));
